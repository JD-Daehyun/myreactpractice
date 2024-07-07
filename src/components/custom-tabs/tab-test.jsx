import Tabs from './tabs'


function RandomComponent(){

    return <h1>Suprise Suprise Suprise</h1>
}

function handleChange(currentTabIndex){
    
}


export default function TabTest(){
    const tabs = [
        {
            label: 'Tab 1',
            content: <div>This is content for Tab 1</div>
        },
        {
            label: 'Tab 2',
            content: <div>This is content for Tab 2</div>
        },
        {
            label: 'Tab 3',
            content: <RandomComponent />
        }
    ]

    return <Tabs  tabsContent ={tabs} onChange={handleChange}/>
}