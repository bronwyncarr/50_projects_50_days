function getData() {
  let items = {
    'header': '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />',
    'title': 'Lorem ipsum dolor sit amet',
    'excerpt': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis',
    'profile_img': '<img src="https://placekitten.com/100/100" alt="" />',
    'name': 'John Doe',
    'date': 'Oct 08, 2020'
  }
  
  // adds innerHTML value to key 
  for (const key in items) {
    document.getElementById(key).innerHTML = items[key]
  }
  
  const animated_bgs = document.querySelectorAll('.animated-bg')
  const animated_bg_texts = document.querySelectorAll('.animated-bg-text')
  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}

setTimeout(getData, 2500)