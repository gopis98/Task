document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var maths = parseInt(document.getElementById('maths').value);
    var english = parseInt(document.getElementById('english').value);
  
    
    if (!name || !email || isNaN(maths) || isNaN(english)) {
      alert('Please fill in all fields with valid values.');
      return;
    }
  
    
    var studentData = {
      name: name,
      email: email,
      maths: maths,
      english: english
    };
  
    localStorage.setItem('studentData', JSON.stringify(studentData));
  

    displayData(studentData);
  });
  
  function displayData(data) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
      <h2>Submitted Details:</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Maths Score:</strong> ${data.maths}</p>
      <p><strong>English Score:</strong> ${data.english}</p>
    `;
  }
  
