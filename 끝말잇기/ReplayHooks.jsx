const React = require('react');
const {useState, useRef } = React;

const WordRepaly =()=>{
        const[word, setWord] = useState('제로초');
        const[value, setValue] = useState('');
        const[result, setResult] = useState('');
        const inputRef = useRef(null);
    

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(word[word.length-1]=== value[0]){
            setResult('딩동댕')
            setWord(value)
            setValue('');
           
            inputRef.current.focus();
        }else{
          setResult('땡')
          setValue('')
            inputRef.current.focus();
        }
    
    }

  

    const onChangeInput = (e) => {
        setValue({ value: e.target.value });
      };

      input;

   


        return(
            <>
            <div>{this.state.word}</div>
            <form onSubmit={onSubmitForm}>
            <input ref={inputRef} value={value} onChange={onChangeInput} />
            <button>클릭!!!</button>
          </form>
          <div>{result}</div>
            </>
        );
    
}
module.exports = WordRelay;

