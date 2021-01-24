import Button from './Button';

const Header =({text})=>{
  const onClick = ()=>{
    console.log('Click');
  }
  return (
    <div className='header'>
      <h1>{text}</h1>
      <Button color='green' text='Add' onClick={onClick}/>
    </div>
  )
}

export default Header;