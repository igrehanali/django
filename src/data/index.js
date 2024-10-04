import bug from '../../public/bug.png';
import discord from "../../public/discord.png";
import chat from "../../public/chat.png";
import edit from "../../public/edit.png";
import location from "../../public/location.png";
import signals from "../../public/signals.png";

const getHelp = [
    {
      img: chat,
      text: 'Forum - Post a question',
    },
    {
      img: discord,
      text: 'Discord - Chat with us'
    },
  ]
  const getInvolved = [
    {
      img: bug,
      text: 'Report an issue'
    },
    {
      img: edit,
      text: 'Contribute to  Django'
    },
    {
      img: location,
      text: 'Local Django Community'
    },
  ]

  const feeds =[
    {
      text: 'Community blog posts',
      img: signals,
      detail:[
        {
          heading: 'Django News - Django 5.1 release candidate 1 released - Jul 26th 2024',
          datetime: 'July 26th, 2024 at 10 a.m. by Django News',
        },
        {
          heading: 'Django News - DjangoCon US 2024 Talks - Jul 19th 2024',
          datetime: 'July 19th, 2024 at 10 a.m. by Django News',
        },
        {
          heading: 'Activation Email Job - Building SaaS #196',
          datetime: 'July 19th, 2024 at midnight by Matt Laymans Website',
        },
        {
          heading: 'Database Design Tutorial for Beginners',
          datetime: 'July 18th, 2024 at 3:16 p.m. by LearnDjango.com',
        },
        {
          heading: 'Is Django a Full Stack Framework?',
          datetime: 'July 18th, 2024 at 3:16 p.m. by LearnDjango.com',
        },
      ]
    },
    {
      text: 'Django jobs',
      img: signals,
      detail:[
        {
          heading: 'Software Engineer',
          datetime: 'July 26th, 2024 at 10 a.m. by Django News',
        },
        {
          heading: 'Backend/DevOps Engineer (m/f/d)',
          datetime: 'July 19th, 2024 at 10 a.m. by Django News',
        },
        {
          heading: 'Full Stack Developer - Python',
          datetime: 'July 19th, 2024 at midnight by Matt Laymans Website',
        },
        {
          heading: 'Need Help to Fix a Bug w/ Django Channels',
          datetime: 'July 18th, 2024 at 3:16 p.m. by LearnDjango.com',
        },
        {
          heading: 'Backend Software Engineer',
          datetime: 'July 18th, 2024 at 3:16 p.m. by LearnDjango.com',
        },
      ]
    },
    {
      text: 'Django Q&A',
      img: signals,
      detail:[
        {
          heading: 'How to properly assign a value to a Django choice field',
          datetime: 'July 26th, 2024 at 10 a.m. by Django News',
        },
        {
          heading: 'How To Redirect In Post Request Response',
          datetime: 'July 19th, 2024 at 10 a.m. by Django News',
        },
        {
          heading: 'How to implement Bootstrap Card Layout in Django: Achieving Desired Design vs. Current Output',
          datetime: 'July 19th, 2024 at midnight by Matt Laymans Website',
        },
        {
          heading: 'Why Gemini API function calling response using old function definition even after changing tools in genai.GenerativeModel?',
          datetime: 'July 18th, 2024 at 3:16 p.m. by LearnDjango.com',
        },
        {
          heading: 'Django send just an alter in response instead of a full template',
          datetime: 'July 18th, 2024 at 3:16 p.m. by LearnDjango.com',
        },
      ]
    },
    {
      text: 'Django links',
      img: signals,
      detail:[
        {
          heading: 'Create a Netflix Clone with Django and Tailwind CSS',
          datetime: 'July 26th, 2024 at 10 a.m. by Django News',
        },
        {
          heading: 'rapidsms/rapidsms: Build SMS applications with Python',
          datetime: 'July 19th, 2024 at 10 a.m. by Django News',
        },
        {
          heading: 'https://adamj.eu/tech/2022/06/20/how-to-find-and-stop-running-queries-on-postgresql/',
          datetime: 'July 19th, 2024 at midnight by Matt Laymans Website',
        },
        {
          heading: 'https://adamj.eu/tech/2022/10/21/migrate-postgresql-ids-serial-identity-django-4.1/',
          datetime: 'July 18th, 2024 at 3:16 p.m. by LearnDjango.com',
        },
        {
          heading: 'GitHub - maxpoletaev/django-micro: Django as a microframework',
          datetime: 'July 18th, 2024 at 3:16 p.m. by LearnDjango.com',
        },
      ]
    },
    {
      text: 'New/updated Django packages',
      img: signals,
      detail:[
        {
          heading: 'opencomparison',
          datetime: 'July 26th, 2024 at 10 a.m. by Django News',
        },
        {
          heading: 'django-shts3',
          datetime: 'July 19th, 2024 at 10 a.m. by Django News',
        },
        {
          heading: 'django-admin-index',
          datetime: 'July 19th, 2024 at midnight by Matt Laymans Website',
        },
        {
          heading: 'mail-editor',
          datetime: 'July 18th, 2024 at 3:16 p.m. by LearnDjango.com',
        },
        {
          heading: 'mobetta',
          datetime: 'July 18th, 2024 at 3:16 p.m. by LearnDjango.com',
        },
      ]
    },
  ]

  const news = [
    {
      title: 'Last call for DjangoCon Europe 2025 organizers',
      postedby: 'Thibaud Colas & DjangoCon',
      date: 'May 5, 2024',
      detail: 'We’re looking for organizers for DjangoCon Europe 2025'
    },
    {
      title: 'June 2024 marks 10 incredible years of Django Girls magic! 🥳✨',
      postedby: 'Rachell Calhoun and Django Girls',
      date: 'May 2, 2024',
      detail: 'Join the celebration as Django Girls turns 10 🎉 and share your experiences in our survey!'
    },
    {
      title: 'Welcome our new Ops member - Baptiste Mispelon',
      postedby: 'Sarah Abderemane',
      date: 'April 28, 2024',
      detail: 'Announcing our new Ops member Baptiste Mispelon.'
    },
    {
      title: 'Livestream: Django Trends for 2024',
      postedby: 'Thibaud Colas and JetBrains',
      date: 'April 25, 2024',
      detail: 'Explore the latest Django trends unveiled by the Django Developers Survey with Sarah Abderemane and Sarah Boyce. Join the livestream on April 25 at 3 PM UTC'
    },
    {
      title: 'DjangoCon US 2024 CFP Last Call',
      postedby: 'DjangoCon US Organizers',
      date: 'April 23, 2024',
      detail: 'Have you submitted your talk or tutorial for DjangoCon US 2024, in beautiful Durham, North Carolina, USA?'
    },
    {
      title: 'An open letter regarding the DjangoCon Europe CfP',
      postedby: 'haim Kirby',
      date: 'April 22, 2024',
      detail: 'An apology, an explanation, and hopefully a way forward.'
    },
    {
      title: 'Django bugfix release issued: 5.0.4',
      postedby: 'Natalia Bidart ',
      date: 'April 3, 2024',
      detail: 'Today the Django project issued a bugfix release for the 5.0 release series.'
    },
    {
      title: 'Welcome our new Fellow - Sarah Boyce',
      postedby: 'Chaim Kirby',
      date: 'March 22, 2024',
      detail: 'The DSF Board and Fellows Committee are pleased to introduce Sarah Boyce as our new Django Fellow. We also give our greatest thanks to Mariusz Felisiak on the 5 years of Fellowship he gave to the DSF.'
    },
    {
      title: 'Django bugfix releases issued: 5.0.6 and 4.2.13',
      postedby: 'Natalia Bidart',
      date: 'May 7, 2024',
      detail: 'Today the Django project reissued bugfix releases for the 5.0 and 4.2 release series.'
    },
    {
      title: 'Django bugfix releases issued: 5.0.5 and 4.2.12',
      postedby: 'Sarah Boyce',
      date: 'May 6, 2024',
      detail: 'Today the Django project issued bugfix releases for the 5.0 and 4.2 release series.'
    },
  ]

  const years = [
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
  ]
  const months = [
    'January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]



  export {
    getHelp,
    getInvolved,
    feeds,
    news,
    months,
    years
  }