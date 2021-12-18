import { ButtonStyled } from '../styles/button.styles'
import { UnOrderList, List } from "../styles/list.styles"
import { Input } from "../styles/input.styles"

const EditList = ( props ) => {

    const { inputHandler, updateUserInfoHandler, user, index, updatedUserInfo, cancelHandler } = props

    const { name, email, phone } = updatedUserInfo

    return (
             <UnOrderList borderColor="#111">
                <List>{ index + 1 }</List>
                <List>
                    <Input 
                        placeholder="Enter your name"
                        name="name" 
                        value={name} 
                        onChange={inputHandler} 
                    />
                </List>
                <List>
                    <Input 
                        placeholder="Enter your email"
                        name="email" 
                        value={email} 
                        onChange={inputHandler} 
                    />
                </List>
                <List>
                    <Input 
                        placeholder='Enter your phoneNo' 
                        name="phone" 
                        value={phone} 
                        onChange={inputHandler}
                    />
                </List>
                <List>
                    <ButtonStyled 
                        onClick={() => updateUserInfoHandler( user.id )} 
                        btnName="Save" 
                        color="#111" 
                        borderColor="blue" 
                        bghover="#6344e4" 
                        colorhover="#fff"
                    />
                </List>
                <List>
                    <ButtonStyled 
                        onClick={cancelHandler} 
                        btnName="Cancel" 
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

export default EditList
