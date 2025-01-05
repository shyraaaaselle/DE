// Start button functionality
function start() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('options-screen').style.display = 'block';
  }
  
  // Show Growth and Decay Section
  function showGrowthDecay() {
    document.getElementById('options-screen').style.display = 'none';
    document.getElementById('growth-decay-screen').style.display = 'block';
  }
  
  // Show Newton's Law Section
  function showNewtonsLaw() {
    document.getElementById('options-screen').style.display = 'none';
    document.getElementById('newton-law-screen').style.display = 'block';
  }
  
  // Go back to the options screen
  function goBackToOptions() {
    document.getElementById('growth-decay-screen').style.display = 'none';
    document.getElementById('newton-law-screen').style.display = 'none';
    document.getElementById('options-screen').style.display = 'block';
  }
  
  // Solve Growth and Decay
  function solveGrowthDecay() {
    const P0 = parseFloat(document.getElementById('initial-pop').value);
    const t0 = parseFloat(document.getElementById('initial-time').value);
    const P1 = parseFloat(document.getElementById('intermediate-pop').value);
    const t1 = parseFloat(document.getElementById('intermediate-time').value);
    const tFinal = parseFloat(document.getElementById('final-time').value);
  
    if (isNaN(P0) || isNaN(P1) || isNaN(t1) || isNaN(tFinal)) {
      document.getElementById('growth-decay-result').textContent =
        "Please fill in all required fields.";
      return;
    }
  
    const k = Math.log(P1 / P0) / (t1 - t0);
    const C = P0;
    const PFinal = C * Math.exp(k * (tFinal - t0));
  
    document.getElementById('growth-decay-result').textContent =
      `Growth/Decay Rate (k): ${k.toFixed(4)}, Constant (C): ${C.toFixed(4)}, Final Population (P): ${PFinal.toFixed(2)}`;
  }
  
  // Solve Newton's Law
  function solveNewtonsLaw() {
    const T0 = parseFloat(document.getElementById('initial-temp').value);
    const Tm = parseFloat(document.getElementById('room-temp').value);
    const T1 = parseFloat(document.getElementById('temp-intermediate').value);
    const t1 = parseFloat(document.getElementById('intermediate-time-nl').value);
    const tFinal = parseFloat(document.getElementById('final-time-nl').value);
  
    if (isNaN(T0) || isNaN(Tm) || isNaN(T1) || isNaN(t1) || isNaN(tFinal)) {
      document.getElementById('newton-law-result').textContent =
        "Please fill in all required fields.";
      return;
    }
  
    const k = Math.log((T1 - Tm) / (T0 - Tm)) / t1;
    const C = T0 - Tm;
    const TFinal = Tm + C * Math.exp(k * tFinal);
  
    document.getElementById('newton-law-result').textContent =
      `Cooling Rate (k): ${k.toFixed(4)}, Constant (C): ${C.toFixed(4)}, Final Temperature (T): ${TFinal.toFixed(2)}`;
  }
  
  // Ask if the user wants to solve another problem
  function askToSolveAnother() {
    const solveAnother = confirm("Do you want to solve another problem?");
    if (solveAnother) {
      goBackToOptions();
    } else {
      window.location.reload(); // Reload the page to go back to the welcome screen
    }
  }  