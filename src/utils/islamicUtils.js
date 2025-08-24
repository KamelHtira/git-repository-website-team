// Islamic date conversion utilities
export const getHijriDate = () => {
  const today = new Date();
  const hijriYear = today.getFullYear() - 622;
  const hijriMonth = today.getMonth() + 1;
  const hijriDay = today.getDate();
  
  const hijriMonths = [
    'Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani',
    'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Sha\'ban',
    'Ramadan', 'Shawwal', 'Dhu al-Qadah', 'Dhu al-Hijjah'
  ];
  
  return {
    day: hijriDay,
    month: hijriMonths[hijriMonth - 1],
    year: hijriYear,
    fullDate: `${hijriDay} ${hijriMonths[hijriMonth - 1]}, ${hijriYear} AH`
  };
};

// Prayer times calculation (mock data for now)
export const getPrayerTimes = (location = 'New York') => {
  const now = new Date();
  const currentHour = now.getHours();
  
  // Mock prayer times (in real app, these would come from an API)
  const prayerTimes = {
    Fajr: '5:30 AM',
    Sunrise: '6:45 AM',
    Dhuhr: '12:30 PM',
    Asr: '3:45 PM',
    Maghrib: '7:15 PM',
    Isha: '8:45 PM'
  };
  
  // Calculate next prayer
  const timeToMinutes = (timeStr) => {
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let totalMinutes = hours * 60 + minutes;
    if (period === 'PM' && hours !== 12) totalMinutes += 12 * 60;
    if (period === 'AM' && hours === 12) totalMinutes = minutes;
    return totalMinutes;
  };
  
  const currentMinutes = currentHour * 60 + now.getMinutes();
  let nextPrayer = null;
  let nextPrayerTime = null;
  
  for (const [prayer, time] of Object.entries(prayerTimes)) {
    const prayerMinutes = timeToMinutes(time);
    if (prayerMinutes > currentMinutes) {
      nextPrayer = prayer;
      nextPrayerTime = time;
      break;
    }
  }
  
  // If no prayer found for today, next prayer is Fajr tomorrow
  if (!nextPrayer) {
    nextPrayer = 'Fajr';
    nextPrayerTime = prayerTimes.Fajr;
  }
  
  return {
    times: prayerTimes,
    nextPrayer,
    nextPrayerTime,
    location
  };
};

// Countdown timer to next prayer
export const getPrayerCountdown = (nextPrayerTime) => {
  const now = new Date();
  const [time, period] = nextPrayerTime.split(' ');
  const [hours, minutes] = time.split(':').map(Number);
  
  let targetHour = hours;
  if (period === 'PM' && hours !== 12) targetHour += 12;
  if (period === 'AM' && hours === 12) targetHour = 0;
  
  const targetTime = new Date();
  targetTime.setHours(targetHour, minutes, 0, 0);
  
  // If prayer time has passed today, set to tomorrow
  if (targetTime <= now) {
    targetTime.setDate(targetTime.getDate() + 1);
  }
  
  const diff = targetTime - now;
  const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
  const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  return {
    hours: hoursLeft,
    minutes: minutesLeft,
    totalMinutes: Math.floor(diff / (1000 * 60))
  };
};

// Format time for display
export const formatTime = (timeStr) => {
  const [time, period] = timeStr.split(' ');
  return { time, period };
};

// Islamic greetings based on time of day
export const getIslamicGreeting = () => {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) {
    return { arabic: 'صباح الخير', english: 'Good Morning', greeting: 'Assalamu Alaikum' };
  } else if (hour >= 12 && hour < 17) {
    return { arabic: 'مساء الخير', english: 'Good Afternoon', greeting: 'Assalamu Alaikum' };
  } else {
    return { arabic: 'مساء الخير', english: 'Good Evening', greeting: 'Assalamu Alaikum' };
  }
};
