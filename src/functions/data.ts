export type Profile = {
  url: string;
  name: string;
  subname: string;
  description: string;
  details: { text: string, icon: string }[],
}

export type Activity = {
  date: string,
  items: { title: string, icon: string, subtitle: string }[]
}

export type SkillChart = {
  data: [number, number, number, number];
  labels: [string ,string, string, string];
}

export type SkillItem = {
  name: string;
  icon: string;
  star: number;
  year: number;
}

const profile: Profile = {
  url: 'https://source.unsplash.com/collection/94734566/480x480',
  name: 'Name',
  subname: 'Subname',
  description: 'This is your description.',
  details: [
    {
      'text': 'company',
      'icon': 'carbon:enterprise'
    },
    {
      'text': 'mail@sample.co.jp',
      'icon': 'carbon:email'
    },
    {
      'text': 'Japan',
      'icon': 'carbon:location'
    },
    {
      'text': 'programming',
      'icon': 'carbon:favorite'
    },
  ]
}

const activities: Activity[] = [
  {
    date: '2023',
    items: [
      {
        title: 'Project B',
        subtitle: 'description',
        icon: 'carbon:fire'
      }
    ]
  },
  {
    date: '2020',
    items: [
      {
        title: 'Project A',
        icon: 'carbon:rocket',
        subtitle: ''
      },
      {
        title: 'Join',
        icon: 'carbon:enterprise',
        subtitle: ''
      },
    ]
  }
]

const skillList: SkillItem[] = [
  {
    'name': 'Java',
    'icon': 'logos:java',
    'star': 3,
    'year': 5
  },
  {
    'name': 'Vue.js',
    'icon': 'logos:vue',
    'star': 3,
    'year': 1
  },
  {
    'name': 'TypeScript',
    'icon': 'logos:typescript-icon',
    'star': 2,
    'year': 1
  },
  {
    'name': 'Docker',
    'icon': 'logos:docker-icon',
    'star': 2,
    'year': 2
  },
  {
    'name': 'AWS',
    'icon': 'logos:aws',
    'star': 2,
    'year': 1
  },
]

const skillChart: SkillChart = {
  data: [42, 2, 16, 40],
  labels: [
    'Frontend',
    'Mobile',
    'Infrastructure',
    'Server',
  ]
}

export default {
  activities,
  profile,
  skillChart,
  skillList,
}