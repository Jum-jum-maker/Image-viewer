

let imageurls = ["/images/image-1.jpg", "/images/image-2.jpg", "/images/image-3.jpg", "/images/image-5.jpg", "/images/image-6.jpg",
 "/images/image-7.jpg", "/images/image-8.jpg", "/images/image-9.jpg"];
 console.log(imageurls)

 function displayImages(){
  let imageContainer = document.getElementsByClassName("image-container")[0]
  imageurls.forEach(image =>{
    const imageDiv = document.createElement("div")
    const img = document.createElement("img")
    img.src = image

    img.classList.add("image")
    img.onclick = () =>displayImageModal(image) 

    imageDiv.appendChild(img)
    imageContainer.appendChild(imageDiv)
    console.log(imageContainer)

  })
 }
//  function displayImages(){
//   let imageContainer = document.getElementsByClassName("image-container")[0]  
//   imageurls.forEach(image =>{
//     const imageDiv = document.createElement("div")
//     const img = document.createElement("img")
//     img.src = image

//         img.classList.add("image")
//         img.onclick =  () => displayImageModal(image)
        
//         imageDiv.appendChild(img)
//         imageContainer.appendChild(imageDiv)
//         console.log(imageContainer);
//  })
//  }
function displayImageModal(url) {
  const modal = document.getElementById('imageModal');
  const modalContent = document.getElementById('modalContent')
  const closeModal = document.getElementById('closeModal')

  if(modal && modalContent && closeModal){
    modal.style.display = 'block'
    modalContent.src = url

    closeModal.onclick = ()=>{
      modal.style.display = 'none'
    };

      
    window.onclick = event =>{
      if(event.target === modal){
        modal.style.display = "none"
      }
    }
  }
}
window.onload = displayImages


