function twoDigit(num) {
  return num < 10 ? "0" + num : num;
}

function showClock() {
  let nowTime = new Date();
  let nowYear = nowTime.getFullYear();
  let nowMonth = twoDigit(nowTime.getMonth() + 1); // 月は0から始まるので+1
  let nowDay = twoDigit(nowTime.getDate());
  let nowWeekday = ["日", "月", "火", "水", "木", "金", "土"][nowTime.getDay()];
  let nowHour = twoDigit(nowTime.getHours());
  let nowMin = twoDigit(nowTime.getMinutes());
  let nowSec = twoDigit(nowTime.getSeconds());

  let msg = "現在時刻：" + nowYear + "年" + nowMonth + "月" + nowDay + "日" + nowWeekday + "曜日 " + nowHour + ":" + nowMin + ":" + nowSec;
  document.getElementById("realtime").innerHTML = msg;
}

setInterval(showClock, 1000);

function generateHelloPython() {
  const colors = ['#FFCCCC', '#CCFFCC', '#CCCCFF', '#FFFFCC', '#CCFFFF', '#FFCCFF']; // 淡い色に変更
  const container = document.body;

  for (let i = 0; i < 25; i++) {
      const helloPython = document.createElement('div');
      helloPython.className = 'hello-world';
      helloPython.textContent = 'Hello World!';
      helloPython.style.fontSize = `${Math.random() * 3 + 1}rem`;
      helloPython.style.color = colors[Math.floor(Math.random() * colors.length)];
      helloPython.style.top = `${Math.random() * 100}vh`;
      helloPython.style.left = `${Math.random() * 100}vw`;

      container.appendChild(helloPython);
  }
}

generateHelloPython();
