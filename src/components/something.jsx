import React from 'react'
import { useQuery } from 'react-query'
import { getUserWithPathParam } from '../api/testApi'


export default function Something() {

    const {data, isLoading, error} = useQuery('user', 
        () => getUserWithPathParam(1),
        {
            refetchOnWindowFocus: true,
            staleTime: 1000 * 10
        }
    )
    
    if(isLoading) return <div>Loading...</div>
    if(error) return <div>And error occurred: {error.message}</div>

    return (
        <>
            {JSON.stringify(data)}
        </>
    )
}
