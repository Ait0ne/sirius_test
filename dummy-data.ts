export interface ITeacher {
    name: string,
    lessons: {
        start:number,
        pupil: string
    }[],
    time: {
        start: number,
        end: number
    }
}


export interface IDates {
    date: string,
    teachers: ITeacher[],
}


export const dates = [
    {
        date: '2020-07-27',
        teachers: [
            {
                name: 'Высоцкая Элеонора',
                lessons: [
                    {
                        start: 800,
                        pupil: 'Тельнова Злата'
                    },
                    {
                        start: 930,
                        pupil: 'Ксюша Диденко 7лет'
                    },
                    {
                        start: 1100,
                        pupil: 'Эрик 6 лет'
                    },
                ],
                time: {
                    start: 800,
                    end: 1330
                }

            }
        ]
    },
    {
        date: '2020-07-28',
        teachers: [
            {
                name: 'Гайсина Гузель',
                time: {
                    start: 845,
                    end: 1015
                },
                lessons: [
                    {
                        start: 845,
                        pupil: 'Тельнова Злата'
                    },
                    {
                        start: 930,
                        pupil: 'Ксения Аксерова, 9 лет'
                    },
                ]
            },
            {
                name: 'Гиголо Анна',
                time: {
                    start: 845,
                    end: 1015
                },
                lessons: []
            }
        ]
    },
    {
        date: '2020-07-30',
        teachers: [
            {
                name: 'Высоцкая Элеонора',
                lessons: [
                    {
                        start: 800,
                        pupil: 'Тельнова Злата'
                    },
                    {
                        start: 1100,
                        pupil: 'Эрик 6 лет'
                    }
                ],
                time: {
                    start: 800,
                    end: 1145
                }
            },
            {
                name: 'Гиголо Анна',
                time: {
                    start: 800,
                    end: 1145
                },
                lessons: [
                    {
                        start: 800,
                        pupil: 'Тельнова Злата'
                    },
                    {
                        start: 845,
                        pupil: 'Тельнова Злата'
                    },
                    {
                        start: 1100,
                        pupil: 'Эрик 6 лет'
                    }
                ]

            },
            {
                name: 'Горбукова Юлия',
                time: {
                    start: 800,
                    end: 1000
                },
                lessons: [
                    {
                        pupil: 'Соколов Александр',
                        start: 915
                    }
                ]
            }
        ]
    },
    {
        date: '2020-07-31',
        teachers: [
            {
                name: 'Гайсина Гузель',
                time: {
                    start: 845,
                    end: 1015
                },
                lessons: []
            },
            {
                name: 'Марков Руслан',
                time: {
                    start: 845,
                    end: 1100
                },
                lessons: [
                    {
                        start: 900,
                        pupil: 'Тельнова Злата'
                    },
                    {
                        start: 1000,
                        pupil: 'Ксения Аксерова, 9 лет'
                    },
                ]
            },
        ]
    }

]