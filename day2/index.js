const calendarContainer = document.getElementById('calendar');
const christmasEmojis = {
  1: "🕊️", 
  2: "🎄", 
  3: "❄️", 
  4: "☃️", 
  5: "🎁", 
  6: "🕯️", 
  7: "🎶", 
  8: "🍪", 
  9: "🥛", 
  10: "🍷", 
  11: "🧣", 
  12: "🧤", 
  13: "🎉", 
  14: "🔔", 
  15: "🌟", 
  16: "🎡", 
  17: "🏠", 
  18: "🌲", 
  19: "🛷", 
  20: "🔥", 
  21: "💝", 
  22: "🦌", 
  23: "🤶", 
  24: "🎅"  
};
for (let i = 1; i <= 24; i++) {
  let box = document.createElement('li');
  box.classList.add('calendar-box');
  let number = document.createElement('p');
  number.innerHTML = i;
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gift');
  let description = document.createElement('button');
  description.innerHTML = "Open me!";
  description.style.fontSize = '1.25rem';
  description.addEventListener('click', () => {
    const iconDiv = document.createElement('div');
    iconDiv.style.display = 'flex';
    iconDiv.style.justifyContent = 'center';
    box.appendChild(iconDiv);
    iconDiv.innerHTML = christmasEmojis[i]
    mapIcon(i);
    description.remove();
    icon.remove();
  })
  description.style.all = 'unset';
  description.style.cursor = 'pointer';
  box.appendChild(number);
  box.appendChild(icon);
  box.appendChild(description);
  calendarContainer.appendChild(box);
}

function mapIcon(number) {
  const icon = christmasEmojis[number];
  return icon;
}

