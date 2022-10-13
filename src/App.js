import './App.css';
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { RentalCollection } from './ui-components'
import { withAuthenticator } from '@aws-amplify/ui-react'

function App({signOut, user}) {
  return (
    <AmplifyProvider>
      <h1 style={{padding: 10}}>Hello {user.attributes.nickname}</h1>
      <button style={{marginBottom: 20, marginLeft: 10}} onClick={signOut}>Sign out</button>
      <RentalCollection style={{padding: 10}} type='list'/>
    </AmplifyProvider>
  )
}

export default withAuthenticator(App);
