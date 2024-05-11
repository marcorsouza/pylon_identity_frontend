export default function AuthContainer({children} : {children : React.ReactNode}) {
    return (
        <div className="auth-container">
        {children}
    </div>
    );
}