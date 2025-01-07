interface HeroData {
    heading: string;
    description: string;
}

interface BlockDetails {
    icon: string;
    title: string;
    description: string;
    buttonTxt: string
}
interface BlockData {
    heading: string;
    blockDetails: BlockDetails[];
}

interface Info {
    heroData: HeroData,
    blockData: BlockData,
}

const info: Info = {
    'heroData': {
        'heading': "Maximize skill, minimize budget",
        'description': "Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.",
    },
    'blockData': {
        'heading': 'Check out our most popular courses!',
        'blockDetails': [
            {
                'icon': '/icon-animation.svg',
                'title': 'Animation',
                'description': 'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
                'buttonTxt': 'Get Started'
            },

            {
                'icon': '/icon-design.svg',
                'title': 'Design',
                'description': 'Create beautiful, usable interfaces to help shape the future of how the web looks.',
                'buttonTxt': 'Get Started'
            },
            {
                'icon': '/icon-photography.svg',
                'title': 'Photography',
                'description': 'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
                'buttonTxt': 'Get Started'
            },
            {
                'icon': '/icon-crypto.svg',
                'title': 'Crypto',
                'description': 'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
                'buttonTxt': 'Get Started'
            },
            {
                'icon': '/icon-business.svg',
                'title': 'Business',
                'description': 'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
                'buttonTxt': 'Get Started'
            },

        ],
    },
}

export default info;