import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getUser, updateUser } from '../redux/action/users'
import EditList from '../components/editList'
import UserList from '../components/userList'
import { List, UnOrderList } from '../styles/list.styles'
import { GlobalStyle } from '../styles/global.styles'
import { Container } from '../styles/container.styles'
import { Card } from '../styles/card.styles'

const UsersList = () => {

    const dispatch = useDispatch()
    const listOfUsers = useSelector(({ userReducer }) => userReducer.userList )

    const [ updatedUserInfo, setUpdatedUserInfo ] = useState({})
    const [ editingUserIndex, setEditingUserIndex ] = useState(null)
    
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    const deleteUserHandler = (id) => {
        const filteredUser = listOfUsers.filter((data) => data.id !== id)
        dispatch(deleteUser(filteredUser))
    }

    const editUserHandler = (index) => {
        setEditingUserIndex(index)
        const { email, name, phone } = listOfUsers.find(data => data.id === index)
        setUpdatedUserInfo({ name, email, phone })
    }

    const inputHandler = (e) => setUpdatedUserInfo({ ...updatedUserInfo, [e.target.name]: e.target.value })

    const cancelHandler = () => setEditingUserIndex(null)

    const updateUserInfoHandler = (id) => {
        const { name, phone, email } = updatedUserInfo
        const updatedUserList = listOfUsers.map((user) => user.id === id ? { ...user, name, phone, email } : user )
        dispatch(updateUser(updatedUserList))
        cancelHandler()
    }

    return (
        <>
            <GlobalStyle />
            <Container>
                <Card >
                    <UnOrderList>
                        <List>Id</List>
                        <List>Name</List>
                        <List>Email</List>
                        <List>Phone</List>
                        <List>Edit</List>
                        <List>Delete</List>
                    </UnOrderList>
                    {
                        listOfUsers?.map((user, index) => {
                            return (
                                      editingUserIndex === user.id ?
                                        <EditList 
                                            key={user.id}
                                            updatedUserInfo={updatedUserInfo} 
                                            updateUserInfoHandler={updateUserInfoHandler} 
                                            inputHandler={inputHandler} 
                                            user={user} 
                                            index={index} 
                                            cancelHandler={cancelHandler} 
                                        /> :
                                        <UserList 
                                            key={user.id}
                                            index={index} 
                                            user={user} 
                                            deleteUserHandler={deleteUserHandler} 
                                            editUserHandler={editUserHandler} 
                                        />
                            )
                        })
                    }
                </Card>
            </Container>

        </>
    )
}

export default UsersList
