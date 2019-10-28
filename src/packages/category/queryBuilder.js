async function getList(options) {
    const {
        limit,
        skip,
        search,
        sort
    } = options

    return [
        {
            $match: {
                name: {
                    $regex: search
                }
            }
        },
        {
            $skip: skip
        },
        {
            $limit: limit
        },
        {
            $sort: sort
        }
    ]
}

async function getTotalNumber(options) {
    const {
        search
    } = options

    return [
        {
            $match: {
                name: {
                    $regex: search
                }
            }
        },
        {
            $group: {
                _id: null,
                total: {
                    $sum: 1
                }
            }
        }
    ]
}

export default {
    getList,
    getTotalNumber
}