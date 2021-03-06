export const stringNAtoNull = (strValue) => {
    if (typeof(strValue) === 'string' && strValue.includes('N/A')) {
        return null
    }
    return strValue
}

export const dataToString = (errorData) => {
    const sampleErrorList = errorData.map((sampleData) => {
        const errorList = Object.keys(sampleData).map(sampleHeader => `${sampleHeader}\n\t\t${sampleData[sampleHeader].join('\n\t\t')}`)
        return errorList.join('\n\t')
    })
    return sampleErrorList.map((errorList, idx) => !!errorList.length ? `Sample ${idx + 1}:\n\t${errorList}` : null).filter(error => !!error).join('\n')
}

const queryFields = {
    sampleName: 'sample_name',
    projectName: 'submitter_project__project_name',
    dateRange: 'created__date__range',
    lab: 'submitting_lab__lab_name',
    genus: 'genus',
    sampleType: 'species',
}

const formattedDate = date => {
    if (!date) {
        return null
    }
    return `${date.c.year}-${date.c.month}-${date.c.day}`
}

const formatFilterQuery = ({field, match, isExact}) => {
    if (field === 'dateRange' && (!!match[0] && !!match[1])) {
        return `${queryFields[field]}=${formattedDate(match[0])}%2C+${formattedDate(match[1])}`
    } else if (field !== 'dateRange' && field !== 'lab' && !!match) {
        return `${queryFields[field]}__${isExact ? 'iexact' : 'icontains'}=${match}`
    }  else {
        return ''
    }
}

export const formatFilterQueries = (filters) => {
    return Object.keys(filters).map((filterName) => formatFilterQuery({field: filterName, ...filters[filterName]})).filter((query) => !!query).join('&')
}
