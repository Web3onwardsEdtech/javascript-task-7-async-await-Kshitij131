async function fetchRandomUser() {
    const userInfo = document.getElementById('userInfo');
    userInfo.innerHTML = 'Loading...';
  
    try {
      const response = await fetch('https://randomuser.me/api/');
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      const user = data.results[0];
      const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
      const email = user.email;
  
      userInfo.innerHTML = `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
      `;
    } catch (error) {
      userInfo.innerHTML = `<p class="error">Error fetching user data: ${error.message}</p>`;
    }
  }
  