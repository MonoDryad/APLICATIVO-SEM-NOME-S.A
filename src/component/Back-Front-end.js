import React, {Component, useEffect, useState} from 'react'

class BackFront extends Component{
    #users

    get users()
    {
        return this.#users
    }

    set users(users)
    {
        this.#users = users
    }

    getUsers = async () => {
        try{
            const response = await fetch('http://localhost:3000/gaiacup/usuario')
            const data = response.json()
            data.then(
                (val) => this.#users = val
            )
            console.log(this.#users)
        }catch(error){

        }
    }

    getUser = async (userId) => {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-type': 'application/json'}
        }
        try{
            await fetch('http://localhost:3000/gaiacup/usuario/' + userId, requestOptions)
            return 
        }catch(error){
            console.log('Erro: ' + console.log(error))
        }
    }

    showUsers(){
        // return this.#users
    }
}

export default BackFront