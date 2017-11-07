module.exports = ({ server } = {}) => ({
    presets: [
        ['env', {
            targets: server ? { node: 'current' } : { browsers: ['> 5%', 'last 2 versions'] }
        }],

        'es2015', 'react', 'stage-2',
    ],
});