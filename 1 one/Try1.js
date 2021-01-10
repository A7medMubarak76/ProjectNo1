const list = document.querySelector('#thebiglist ul');






//                 The search 

const searchbar = document.forms['search-books'].querySelector('input');

searchbar.addEventListener('keyup', function(e){
   
    const temp = e.target.value.toLowerCase();
    
    const books = list.getElementsByTagName('li');
    
    Array.from(books).forEach(function(book){
        
        const booktitle = book.firstElementChild.textContent;
        
        
        if(booktitle.toLocaleLowerCase().indexOf(temp)!= -1){
            book.style.display = "block";
        }
        else{
            book.style.display = "none";
        }
        
        
    })
    
});




//              The Delete btn 


list.addEventListener('click', function(e){
    
    if(e.target.className == 'delete-btn'){
        
        const li = e.target.parentElement;
        list.removeChild(li);
    }
    
});




//              The Hide btn


const hidethebooks = document.querySelector('#hide-list');

hidethebooks.addEventListener('change', function(e){
   
    if(hidethebooks.checked){
        
        list.style.display = "none";
    }
    else{
        
        list.style.display = "block";
    }
    
});





//            Adding  new books 



const addForm = document.forms['adding-book'];

addForm.addEventListener('submit', function(e){
   
    e.preventDefault();
    
    
    const boxvalue = addForm.querySelector('input[type="text"]').value;
    
    
    const newli = document.createElement('li');
    const newbookname = document.createElement('span');
    const clonedelt = document.querySelector('.delete-btn');
    const newdelete = clonedelt.cloneNode(true);
    
    
    
    newli.appendChild(newbookname);
    newli.appendChild(newdelete);
    
    list.appendChild(newli);
    
    
    newbookname.classList.add('book-name');
    
    
    newbookname.textContent = boxvalue;
    
    
});




