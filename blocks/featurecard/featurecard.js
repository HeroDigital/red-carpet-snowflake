
export default function decorate(block) {
   const cols = [...block.firstElementChild.children];
   block.classList.add(`featurecard-${cols.length}-cols`);

   // setup image columns
   [...block.children].forEach((row) => {
     [...row.children].forEach((col, index) => {
       const pic = col.querySelector("picture");
       if (pic) {
         const picWrapper = pic.closest("div");
         if (picWrapper && picWrapper.children.length === 1) {
           // picture is only content in column
           picWrapper.classList.add("featurecard-img-col");
         }
       } else {
        col.classList.add(`featurecard-content-${index}`);
       }
     });
   });
}