import { ButtonStyled } from '../styles/button.styles'
import { UnOrderList, List } from "../styles/list.styles"

const UserList = (props) => {

    const { user, deleteUserHandler, editUserHandler, index } = props

    const { id, name, email, phone } = user

    return (
            <UnOrderList borderColor="#111">
                <List>{ index + 1 }</List>
                <List>{ name }</List>
                <List>{ email }</List>
                <List>{ phone }</List>
                <List>
                    <ButtonStyled 
                        onClick={() => editUserHandler( id )} 
                        btnName="Edit" 
                        color="#111" 
                        borderColor="blue" 
                        bghover="#6344e4" 
                        colorhover="#fff"
                    />
                </List>
                <List>
                    <ButtonStyled 
                        onClick={() => deleteUserHandler( id )} 
                        btnName="Delete" 
                        color="#fff" 
                        bg="#6344e4" 
                        bghover="none" 
                        borderhover="#6344e4" 
                        colorhover="#000" 
                    />
                </List>
            </UnOrderList>
    )
}

export default UserList
