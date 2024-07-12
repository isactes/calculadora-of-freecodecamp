//import Title from "../title/title"
import ButtonNumber from "../button/buttonNumber"
import ButtonCaracteres from "../button/buttonCaracteres"
import { numberCalcu, symbolCalcu } from "../../utilities"
import { useState } from "react"
import AreaText from "../textArea/TextArea"


function Card() {

  const [ answer, setAnswer] = useState("");
  const [ expression, setExpression ] = useState("")
  const toString = expression.trim();

  const isOperator = (symbol) => {
    return /[*/+-]/.test(symbol);
  }

  const calculate = () => {
    if(isOperator(toString.charAt(toString.length -1))) return;

    const parts = toString.split(" ");
    const newParts = []
    
    for (let i = parts.length -1 ; i >= 0; i--) {
      if(["*", "/", "+"].includes(parts[i]) && isOperator(parts[i - 1])){
        newParts.unshift(parts[i]);
        let j = 0;
        let k = i -1;
        while(isOperator(parts[k])){
          k--;
          j++;
        }
        i -= j;
      } else {
        newParts.unshift(parts[i])
      }
    }
    const newExpression = newParts.join(" ");
    if(isOperator(newExpression.charAt(0))){
      setAnswer(eval(answer + newExpression));
    } else {
      setAnswer(eval(newExpression));
    }
    setExpression("")
  }

  const handleOperator = (symbol) => {
    if(symbol === "C"){
      setAnswer("");
      setExpression("0")
    } else if (symbol === "negative") {
      if (answer === "") return;
      setAnswer(
        answer.toString().charAt(0) === "-" ? answer.slice(1) : "-" + answer
      );
    } else if (symbol === "%"){
      if(answer === "") return;
      setAnswer((parseFloat(answer) / 100).toString())
    } else if (isOperator(symbol)){
      setExpression(toString + " " + symbol + " ");
    } else if(symbol === "="){
      calculate();
    } else if (symbol === "0") {
      if(expression.charAt(0) !== "0"){
        setExpression(expression + symbol)
      }
    } else if(symbol === "."){
      const lastNumber = expression.split(/[-+/*]/g).pop();
      if(!lastNumber) return;
      console.log("⚒️ lasNumber", lastNumber);
      if(lastNumber?.includes(".")) return;
      setExpression(expression + symbol)
    } else {
      if(expression.charAt(0) === "0"){
        setExpression(expression.slice(1) + symbol);
      } else {
        setExpression(expression + symbol)
      }
    }
  };
  


  return (
    <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <AreaText
        id="display"
        key="display"
        answer={answer}
        expression={expression}
      />
      <div className="grid grid-cols-3 gap-2">
        {numberCalcu.map(number => (
          <ButtonNumber
            id={number.id}
            key={number.id}
            number={number.number}
            onClick={() => handleOperator(number.number)}
          />
        ))}
        {symbolCalcu.map(simbol => (
          <ButtonCaracteres
            id={simbol.id}
            key={simbol.id}
            caracter={simbol.simbole}
            onClick={() => handleOperator(simbol.simbole)}
          />
        ))}
        <ButtonCaracteres
          id="equals"
          key={"equals"}
          onClick={() => handleOperator("=")}
          caracter={"="}
        />
        <ButtonCaracteres
          id="clear"
          key={"clear"}
          onClick={() => handleOperator("C")}
          caracter={"C"}
        />
        <ButtonCaracteres
          id="decimal"
          key={"decimal"}
          onClick={() => handleOperator(".")}
          caracter={"."}
        />
        <ButtonCaracteres
          id="negative"
          key={"negative"}
          onClick={() => handleOperator("negative")}
          caracter={"+/-"}
        />
        <ButtonCaracteres
          id="porcentage"
          key={"porcentage"}
          onClick={() => handleOperator("%")}
          caracter={"%"}
        />
      </div>
    </div>
  )
}

export default Card