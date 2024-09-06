const calendar = document.querySelector('.calendar');
const monthDisplay = document.getElementById('month');
const yearDisplay = document.getElementById('year');

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const months = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

function generateCalendar(month, year) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  // Limpiar los días previos
  calendar.innerHTML = `
    <div class="day">Lun</div>
    <div class="day">Mar</div>
    <div class="day">Mié</div>
    <div class="day">Jue</div>
    <div class="day">Vie</div>
    <div class="day">Sáb</div>
    <div class="day">Dom</div>
  `;

  // Ajustar el primer día del mes
  const paddingDays = (firstDayIndex + 6) % 7;  // Ajusta para que empiece en lunes
  for (let i = 0; i < paddingDays; i++) {
    const emptyDiv = document.createElement('div');
    emptyDiv.classList.add('date');
    calendar.appendChild(emptyDiv);
  }

  // Generar los días
  for (let day = 1; day <= daysInMonth; day++) {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('date');
    dayDiv.innerText = day;
    calendar.appendChild(dayDiv);
  }

  // Actualizar mes y año
  monthDisplay.textContent = months[month];
  yearDisplay.textContent = year;

  // Asegura que la altura del calendario sea consistente
  calendar.style.height = `${calendar.scrollHeight}px`;
}

// Navegar entre los meses
document.getElementById('prev-month').addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  generateCalendar(currentMonth, currentYear);
});

document.getElementById('next-month').addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  generateCalendar(currentMonth, currentYear);
});

// Inicializar el calendario
generateCalendar(currentMonth, currentYear);
