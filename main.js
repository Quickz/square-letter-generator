const result = document.getElementById('result');
const input = document.getElementById('input');

input.oninput = convert;


function convert()
{
	result.innerHTML = asSquareLetters(input.value);
}

function asSquareLetters(message)
{  
  const minSquaredLetterEntityNumber = 127344;
  const minLetterEntityNumber = 97;
  
  let newMessage = '';
  message = message.toLowerCase();
  
  for (let i = 0; i < message.length; i++)
  {
    let isLetter = /[a-z]/g.test(message[i]);
    if (!isLetter)
    {
        newMessage += message[i];
        continue;
    }

  	let entityNumber = message.charCodeAt(i) - minLetterEntityNumber + minSquaredLetterEntityNumber;
    newMessage += `&#${entityNumber};`;
  }
  
	return newMessage;
}
