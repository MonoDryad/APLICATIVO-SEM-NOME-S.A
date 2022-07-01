import React, {Component, useEffect, useState} from 'react'

let users

const pushToArray = (value, method) => {
    switch(method){
        case 1:
            users = value
        case 2:
            return value
    }
}

export const getUsers = async () => {
    try{
        const response = await fetch('http://localhost:3000/gaiacup/usuario')
        const data = response.json()
        data.then(
            (val) => pushToArray(val, 1)
        )
        return users
    }catch(error){
        console.log(error)
    }
}

export const getUser = async (userId) => {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-type': 'application/json'}
    }
    try{
        const response = await fetch('http://localhost:3000/gaiacup/usuario/' + userId, requestOptions)
        const data = response.json()
        data.then(
            (val) => pushToArray(val, 1)
        )
    }catch(error){
        console.log('Erro: ' + console.log(error))
    }
}