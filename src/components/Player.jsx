import { useState } from "react";
export default function Player({initialName, symbol,isActive,onChangeName}){
  const [isEditable,setEditable]=useState(false);
  const [name,setName]=useState(initialName);
  let playerName=<span className="player-name">{name}</span>;
  let content="Edit";
  if(isEditable){
    playerName=<input type="text" required value={name} onChange={handleChange}/>;
    content="Save";
  }
  function editContent(){
    setEditable((prevValue)=>!prevValue);
    if(isEditable)
      onChangeName(symbol,name);
  }
  function handleChange(event){
    setName(event.target.value);
  }
    return(
        <li className={isActive? "active":undefined}>
        <span className="player">
          {playerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={editContent}>{content}</button>
      </li>
    );
}