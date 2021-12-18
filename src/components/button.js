export const Button = ( props ) => {

    const { onClick, className, btnName } = props

    return <button onClick={ onClick } className={ className }>{ btnName }</button>
}