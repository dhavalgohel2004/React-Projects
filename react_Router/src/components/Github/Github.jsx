import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData() 

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/dhavalgohel2004')
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data) })
    // }, [])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-xl overflow-hidden">
                <div className="p-6 flex flex-col items-center">
                    <img
                        src={data.avatar_url}
                        alt="Avatar"
                        className="w-32 h-32 rounded-full shadow-lg mb-4"
                    />
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">{data.name}</h1>
                    <p className="text-sm text-gray-600 italic">{data.bio || "No bio available"}</p>
                    <div className="w-full mt-6 grid grid-cols-2 gap-4 text-center">
                        <div className="flex flex-col items-center">
                            <span className="text-lg font-bold text-blue-600">{data.followers}</span>
                            <span className="text-sm text-gray-500">Followers</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-lg font-bold text-green-600">{data.public_repos}</span>
                            <span className="text-sm text-gray-500">Repositories</span>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-sm font-semibold text-gray-500 mb-1">
                        Account Details:
                    </h3>
                    <ul className="text-sm text-gray-600">
                        <li>
                            <strong>Created At: </strong>
                            {new Date(data.created_at).toLocaleDateString()}
                        </li>
                        <li>
                            <strong>Updated At: </strong>
                            {new Date(data.updated_at).toLocaleDateString()}
                        </li>
                    </ul>
                    <div className="mt-6 text-center">
                        <a
                            href={data.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
                        >
                            Visit GitHub Profile
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Github


export const gitHuInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/dhavalgohel2004');
    return response.json();
}