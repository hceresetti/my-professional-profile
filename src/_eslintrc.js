export const root = true;
module.exports = {
  extends: '@react-native-community',
}
export const parser = '@typescript-eslint/parser';
export const plugins = ['@typescript-eslint'];
export const overrides = [
    {
        files: ['*.ts', '*.tsx'],
        rules: {
            '@typescript-eslint/no-shadow': ['error'],
            'no-shadow': 'off',
            'no-undef': 'off',
        },
    },
];