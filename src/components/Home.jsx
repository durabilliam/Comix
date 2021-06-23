import useApplicationData from '../hooks/useApplicationData'

export default function Home() {
  const { state, dispatch } = useApplicationData();
  console.log("STATE", state) 
  return (
    <div>This is Home TESTING</div>
  )
}