// ====== بنك الأسئلة (30 سؤال) ======
// ملاحظة: الخيار الأول في المصفوفة هو الصحيح، لكن سيتم خلطها تلقائياً
const rawQuestions = [
    { q: "ما الذي فتحه الإنترنت أمام الشركات للتواصل مع المجتمعات؟",
      correct: "آفاقاً واسعة للتوسع",
      wrong: ["قيوداً صارمة على العمل", "تكاليف باهظة إضافية", "منافسة أقل حدة"] },

    { q: "يساعد استخدام الإنترنت الموظفين والعملاء على:",
      correct: "تسهيل الإنجاز وتوفير الوقت",
      wrong: ["زيادة ساعات العمل اليومية", "تعقيد جميع المعاملات", "إلغاء قنوات التواصل"] },

    { q: "يمكن للعملاء من خلال الإنترنت:",
      correct: "الوصول من أي مكان وأي وقت",
      wrong: ["الوصول من مكان واحد فقط", "التعامل مع مؤسسة واحدة", "الانتظار لفترات طويلة"] },

    { q: "من مزايا سهولة الاستخدام عبر الإنترنت أن العميل يمكنه:",
      correct: "إتمام معاملاته دون الحضور",
      wrong: ["الذهاب شخصياً للمؤسسة", "الانتظار في صفوف طويلة", "دفع رسوم إضافية"] },

    { q: "يساعد الإنترنت الموظفين على إنجاز أعمالهم بسرعة أكبر مما:",
      correct: "يوفر الوقت ويحسن الأداء",
      wrong: ["يزيد التكاليف التشغيلية", "يقلل الإنتاجية العامة", "يعقد عمليات التواصل"] },

    { q: "خاصية الإتاحة عبر الإنترنت تتيح للموظفين:",
      correct: "العمل من أماكن وأوقات متنوعة",
      wrong: ["العمل من مكان واحد فقط", "العمل في وقت محدد فقط", "عدم التواصل مع الزملاء"] },

    { q: "ما المثال الذي ذُكر على الموظفين الذين يشعرون بسعادة عند إتمام صفقة بيع كاملة؟",
      correct: "سماسرة العقارات والبورصة",
      wrong: ["المحاسبون في المصارف", "المهندسون في المشاريع", "الأطباء في المستشفيات"] },

    { q: "ما المشكلة التي قد تواجه العملاء الذين يفتقرون للخبرة التكنولوجية؟",
      correct: "الانزعاج والإحباط الشديد",
      wrong: ["الشعور بالرضا التام", "الحماس للتعلم المستمر", "السعادة بإتمام الشراء"] },

    { q: "ما البنك الذي ذُكر كمثال على دعم الموظفين من ذوي الإعاقة؟",
      correct: "بنك باركليز البريطاني",
      wrong: ["بنك الراجحي السعودي", "البنك الأهلي المصري", "بنك قطر الوطني"] },

    { q: "ما اسم الفعالية البارزة لبنك باركليز لتدريب الموظفين على المهارات الرقمية؟",
      correct: "تي أند تيك الرقمية",
      wrong: ["ديل أند تيك الحديثة", "تيك أند ديل المتقدمة", "باركليز تيك العالمية"] },

    { q: "نظراً لوتيرة الحياة المزدحمة أصبح مطلباً أساسياً لدى العملاء:",
      correct: "المرونة في التسوق والإرجاع",
      wrong: ["تعقيد عمليات التسوق", "زيادة أسعار المنتجات", "تقليل خيارات الشراء"] },

    { q: "المتاجر الإلكترونية تتميز بميزة:",
      correct: "التوافر المستمر طوال الأسبوع",
      wrong: ["التوافر في أوقات محددة", "الإغلاق في العطلات الرسمية", "الوصول المحلي المحدود"] },

    { q: "قسم خدمة العملاء عبر الإنترنت يتطلب:",
      correct: "الاستجابة الفورية في أي وقت",
      wrong: ["الاستجابة المتأخرة نوعاً ما", "العمل في النهار فقط", "تجاهل بعض الاستفسارات"] },

    { q: "من الآثار السلبية للمنافسة الشديدة عبر الإنترنت:",
      correct: "هبوط الأسعار وتعدد الخيارات",
      wrong: ["ارتفاع كبير في الأسعار", "قلة المنتجات المتاحة", "تراجع عدد المنافسين"] },

    { q: "ما الذي يرتبط به الحضور على شبكات التواصل الاجتماعي لأي شركة؟",
      correct: "بتكاليف مالية متنوعة",
      wrong: ["بدون أي تكاليف مالية", "بتكاليف رمزية بسيطة", "بتكاليف لمرة واحدة"] },

    { q: "ما الشريحة العمرية التي ذُكرت كمثال على استهداف الإعلانات المدفوعة؟",
      correct: "المراهقون من 16 إلى 19",
      wrong: ["الأطفال من 5 إلى 10", "كبار السن فوق الستين", "الشباب من 25 إلى 30"] },

    { q: "تطبيق وإنشاء مجتمع عبر الإنترنت يتطلب:",
      correct: "وقتاً أطول من التحضير",
      wrong: ["وقتاً أقل من التحضير", "نفس وقت التحضير تقريباً", "بدون أي وقت يذكر"] },

    { q: "عندما يحل مجتمع رقمي جديد محل نظام قديم، فإن المستخدمين:",
      correct: "قد يبدون مقاومة للتعديل",
      wrong: ["يرحبون دائماً بالتغيير", "لا يهتمون بالأمر أبداً", "يساعدون في التطوير"] },

    { q: "من مخاطر عمليات التبديل أو الدمج مع النظام الحالي:",
      correct: "فترة توقف وخسارة الأعضاء",
      wrong: ["زيادة الإنتاجية العامة", "تحسين الخدمات فوراً", "تقليل التكاليف الكلية"] },

    { q: "ما الهدف من مقارنة الإنتاجية بين المجتمع الإلكتروني الجديد والأنظمة القديمة؟",
      correct: "تحقيق أداء وكفاءة أكبر",
      wrong: ["تقليل جودة الخدمات", "زيادة التكاليف المالية", "تعقيد عملية الاستخدام"] },

    { q: "من المزايا الإنتاجية للمجتمع الإلكتروني الجديد:",
      correct: "تيسير الوصول والتفاعل",
      wrong: ["تعقيد إمكانية الوصول", "تقليل مستوى الأمان", "تقليل فرص التدريب"] },

    { q: "من المخاطر الإضافية التي قد تنتج عن الميزات الإضافية للمجتمع الجديد:",
      correct: "زيادة مخاطر أمان المعلومات",
      wrong: ["زيادة الإنتاجية الكلية", "تقليل التكاليف العامة", "تحسين مستوى الخصوصية"] },

    { q: "ما النتيجة السلبية لانشغال الموظفين بمواقع التواصل أثناء الدوام الرسمي؟",
      correct: "انخفاض إنتاجية الموظفين",
      wrong: ["زيادة الإنتاجية العامة", "تحسين التواصل الداخلي", "زيادة أرباح المؤسسة"] },

    { q: "ما الخطأ الذي قد يقع فيه بعض الموظفين على مواقع مثل إكس (تويتر)؟",
      correct: "اعتقاد أن منشوراتهم خاصة",
      wrong: ["كتابة منشورات خاصة جداً", "عدم استخدام المنصة أبداً", "إغلاق حساباتهم الرسمية"] },

    { q: "ما النتيجة التي قد يتعرض لها الموظف بسبب استخدامه غير الملائم لمواقع التواصل؟",
      correct: "فقدان وظيفته الحالية",
      wrong: ["الحصول على الترقية", "نيل مكافأة مالية", "الحصول على إجازة"] },

    { q: "ما نسبة ارتفاع خروقات أمان البيانات في الربع الأول من 2019 مقارنة بـ 2018؟",
      correct: "ما يقارب 56 بالمئة",
      wrong: ["ما يقارب 26 بالمئة", "ما يقارب 36 بالمئة", "ما يقارب 46 بالمئة"] },

    { q: "ما نسبة تكلفة الاختراقات الأمنية من التكلفة الإجمالية لخسارة الأعمال؟",
      correct: "ما يقارب 36 بالمئة",
      wrong: ["ما يقارب 16 بالمئة", "ما يقارب 26 بالمئة", "ما يقارب 46 بالمئة"] },

    { q: "ما نوعا مصادر البيانات المذكورة في التقرير؟",
      correct: "أولية وثانوية معاً",
      wrong: ["مفتوحة ومغلقة تماماً", "داخلية وخارجية فقط", "رقمية وورقية معاً"] },

    { q: "البيانات الثانوية هي البيانات التي:",
      correct: "اشترتها من طرف آخر",
      wrong: ["جمعتها المؤسسة بنفسها", "تُدخل في نظام CRM", "تُنتج داخلياً دائماً"] },

    { q: "من الأمثلة على البيانات الثانوية:",
      correct: "المقالات والتقارير الحكومية",
      wrong: ["قائمة تفاصيل العملاء", "بيانات نظام CRM الداخلية", "قوائم بريد العملاء"] }
];

// ====== دالة الخلط العشوائي (Fisher-Yates) ======
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ====== تجهيز الأسئلة بترتيب عشوائي عند كل تحميل ======
let questions = [];

function buildQuestions() {
    questions = rawQuestions.map(item => {
        // دمج الإجابة الصحيحة مع الخاطئة في مصفوفة
        const allOptions = [item.correct, ...item.wrong];

        // خلط الخيارات
        const shuffled = shuffleArray(allOptions);

        // معرفة موقع الإجابة الصحيحة الجديد
        const correctIndex = shuffled.indexOf(item.correct);

        return {
            q: item.q,
            options: shuffled,
            correct: correctIndex
        };
    });
}

// ====== متغيرات الحالة ======
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let answered = false;

// ====== عناصر DOM ======
const startScreen    = document.getElementById('start-screen');
const quizScreen     = document.getElementById('quiz-screen');
const resultScreen   = document.getElementById('result-screen');
const reviewScreen   = document.getElementById('review-screen');

const startBtn       = document.getElementById('start-btn');
const nextBtn        = document.getElementById('next-btn');
const restartBtn     = document.getElementById('restart-btn');
const reviewBtn      = document.getElementById('review-btn');
const backToResult   = document.getElementById('back-to-result');

const questionCounter = document.getElementById('question-counter');
const scoreDisplay    = document.getElementById('score-display');
const progressFill    = document.getElementById('progress-fill');
const questionText    = document.getElementById('question-text');
const optionsContainer= document.getElementById('options-container');

const resultIcon    = document.getElementById('result-icon');
const resultTitle   = document.getElementById('result-title');
const resultMessage = document.getElementById('result-message');
const finalScore    = document.getElementById('final-score');
const correctCount  = document.getElementById('correct-count');
const wrongCount    = document.getElementById('wrong-count');
const percentage    = document.getElementById('percentage');
const scoreProgress = document.getElementById('score-progress');

const reviewContainer = document.getElementById('review-container');

// ====== دوال مساعدة ======
function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
    window.scrollTo(0, 0);
}

// ====== بدء الاختبار ======
function startQuiz() {
    buildQuestions();          // إعادة بناء الأسئلة بترتيب عشوائي جديد
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    answered = false;
    showScreen(quizScreen);
    loadQuestion();
}

// ====== تحميل سؤال ======
function loadQuestion() {
    answered = false;
    nextBtn.disabled = true;
    nextBtn.textContent = (currentQuestion === questions.length - 1) ? 'إظهار النتيجة 🎯' : 'التالي ←';

    const q = questions[currentQuestion];

    questionCounter.textContent = `السؤال ${currentQuestion + 1} من ${questions.length}`;
    scoreDisplay.textContent = `النقاط: ${score}`;
    progressFill.style.width = `${(currentQuestion / questions.length) * 100}%`;

    questionText.textContent = q.q;

    optionsContainer.innerHTML = '';
    const letters = ['أ', 'ب', 'ج', 'د'];

    q.options.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
        div.addEventListener('click', () => selectOption(i, div));
        optionsContainer.appendChild(div);
    });
}

// ====== اختيار إجابة ======
function selectOption(index, element) {
    if (answered) return;
    answered = true;

    const q = questions[currentQuestion];
    const allOptions = optionsContainer.querySelectorAll('.option');

    allOptions.forEach(opt => opt.classList.add('disabled'));
    allOptions[q.correct].classList.add('correct');

    if (index === q.correct) {
        element.classList.add('correct');
        score++;
    } else {
        element.classList.add('wrong');
    }

    scoreDisplay.textContent = `النقاط: ${score}`;

    userAnswers.push({
        question: q.q,
        options: q.options,
        correct: q.correct,
        selected: index
    });

    nextBtn.disabled = false;
}

// ====== السؤال التالي ======
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResults();
    }
}

// ====== عرض النتائج ======
function showResults() {
    progressFill.style.width = '100%';
    showScreen(resultScreen);

    const total = questions.length;
    const pct = Math.round((score / total) * 100);
    const wrong = total - score;

    finalScore.textContent = score;
    correctCount.textContent = score;
    wrongCount.textContent = wrong;
    percentage.textContent = pct + '%';

    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (score / total) * circumference;
    scoreProgress.style.strokeDasharray = circumference;
    scoreProgress.style.strokeDashoffset = circumference;
    setTimeout(() => {
        scoreProgress.style.strokeDashoffset = offset;
    }, 100);

    let color = '#10b981';
    if (pct < 50) color = '#ef4444';
    else if (pct < 75) color = '#f59e0b';
    scoreProgress.style.stroke = color;

    if (pct === 100) {
        resultIcon.textContent = '🏆';
        resultTitle.textContent = 'ممتاز! علامة كاملة';
        resultMessage.textContent = 'أداء استثنائي! لقد أجبت على جميع الأسئلة بشكل صحيح.';
    } else if (pct >= 80) {
        resultIcon.textContent = '🎉';
        resultTitle.textContent = 'ممتاز!';
        resultMessage.textContent = 'أداء رائع! لديك فهم ممتاز لمحتوى التقرير.';
    } else if (pct >= 60) {
        resultIcon.textContent = '👍';
        resultTitle.textContent = 'جيد جداً';
        resultMessage.textContent = 'أداء جيد، يمكنك تحسينه بمراجعة بعض النقاط.';
    } else if (pct >= 40) {
        resultIcon.textContent = '📖';
        resultTitle.textContent = 'مقبول';
        resultMessage.textContent = 'تحتاج إلى مراجعة المزيد من محتوى التقرير.';
    } else {
        resultIcon.textContent = '💪';
        resultTitle.textContent = 'حاول مرة أخرى';
        resultMessage.textContent = 'لا بأس، راجع التقرير ثم أعد المحاولة.';
    }
}

// ====== مراجعة الإجابات ======
function showReview() {
    showScreen(reviewScreen);
    reviewContainer.innerHTML = '';

    userAnswers.forEach((ans, idx) => {
        const isCorrect = ans.selected === ans.correct;
        const item = document.createElement('div');
        item.className = `review-item ${isCorrect ? 'correct' : 'wrong'}`;

        const letters = ['أ', 'ب', 'ج', 'د'];
        const yourAnswer = `${letters[ans.selected]}. ${ans.options[ans.selected]}`;
        const correctAnswer = `${letters[ans.correct]}. ${ans.options[ans.correct]}`;

        item.innerHTML = `
            <div class="review-question">${idx + 1}. ${ans.question}</div>
            <div class="review-answer">
                <div class="your-answer ${isCorrect ? 'correct' : ''}">
                    إجابتك: ${yourAnswer} ${isCorrect ? '✓' : '✗'}
                </div>
                ${!isCorrect ? `<div class="correct-answer">الإجابة الصحيحة: ${correctAnswer}</div>` : ''}
            </div>
        `;
        reviewContainer.appendChild(item);
    });
}

// ====== ربط الأحداث ======
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', startQuiz);
reviewBtn.addEventListener('click', showReview);
backToResult.addEventListener('click', () => showScreen(resultScreen));