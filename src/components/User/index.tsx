import { ReactNode } from "react";

interface UserProps {
    nome: string
    children?: ReactNode

}

const User = ({nome, children}: UserProps) => {
    return (
        <div>
            <p>Usuário: {nome}</p><br />
            {children && <div>{children}</div>}<br />
        </div>
    )
}

export default User;