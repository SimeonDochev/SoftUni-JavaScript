function search() {
   const list = document.getElementById('towns').children;
   const searched = document.getElementById('searchText').value;

   for (let i = 0; i < list.length; i++) {
      townName = list[i].textContent;
      list[i].style.textDecoration = 'none';
      list[i].style.fontWeight = 'normal';
   }

   let matches = 0;
   for (let i = 0; i < list.length; i++) {
      townName = list[i].textContent;
      if (townName.includes(searched) && searched != '') {
         list[i].style.textDecoration = 'underline';
         list[i].style.fontWeight = 'bold';
         matches += 1;
      }
   }
   document.getElementById('result').textContent = `${matches} matches found`;
}