export const googleMapExists = () => {
    const { google } = window;
    return typeof google === 'object' && typeof google.maps === 'object'
}