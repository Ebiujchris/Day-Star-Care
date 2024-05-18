// const uploadForm = document.getElementById('uploadForm');
//     const dollImagesContainer = document.getElementById('dollImagesContainer');

//     uploadForm.addEventListener('submit', async (e) => {
//       e.preventDefault();
//       const formData = new FormData(uploadForm);
//       try {
//         const response = await fetch('/upload', {
//           method: 'POST',
//           body: formData
//         });
//         if (response.ok) {
//           const imageURL = await response.text();
//           createCard(imageURL);
//         } else {
//           console.error('Failed to upload image');
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     });

//     function createCard(imageURL) {
//       const card = document.createElement('div');
//       card.classList.add('card');

//       const img = document.createElement('img');
//       img.src = imageURL;
//       img.classList.add('card-img-top');
//       card.appendChild(img);

//       const cardBody = document.createElement('div');
//       cardBody.classList.add('card-body');

//       const deleteBtn = document.createElement('button');
//       deleteBtn.textContent = 'Delete';
//       deleteBtn.classList.add('btn', 'btn-danger');
//       deleteBtn.addEventListener('click', async () => {
//         try {
//           const response = await fetch('/delete', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ imageURL })
//           });
//           if (response.ok) {
//             card.remove();
//           } else {
//             console.error('Failed to delete image');
//           }
//         } catch (error) {
//           console.error(error);
//         }
//       });

//       cardBody.appendChild(deleteBtn);
//       card.appendChild(cardBody);
//       dollImagesContainer.appendChild(card);
//     }

// routes/toyRoutes.js
