import { GoogleLogin } from '@react-oauth/google'

const Google = ({onSuccess}) => {
    return ( 
      <div className="login">
             <GoogleLogin
            onSuccess={onSuccess}
            onError={() => {
              console.log('Login Failed');
            }}
          />
      </div>
     );
}
 
export default Google;