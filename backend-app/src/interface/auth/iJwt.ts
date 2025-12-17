interface JwtInterface {
    email: string,
    userId: string,
    accessTokenSecret: string,
    refreshTokenSecret: string,
    expirationTime: number,
}

export default JwtInterface;