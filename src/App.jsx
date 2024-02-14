import ButtonGroups from './components/button-groups/index.jsx'

function App() {

  const userName = "Hamza Doğan"

  return (

    <div className='p-5'>
       
       <header className='flex items-center justify-between'>

        <h3 className='text-lg font-semibold'>Hoşgeldin <span className='font-bold'>{userName}</span> </h3>

        <nav className='flex gap-2.5'>
          <ButtonGroups
            buttons={[
              {
                title: 'New Add',
                attributes: {
                  size: 'small'
                }
              },
              {
                title: 'Settings',
                attributes: {
                  size: 'small'
                }
              },
              {
                title: 'Logout',
                attributes: {
                  size: 'small',
                  variant: "danger",
                  onClick: () => alert("Selamlar")
                }
              }
            ]}
          />
        </nav>
      </header>

    </div>
  )


}

export default App
