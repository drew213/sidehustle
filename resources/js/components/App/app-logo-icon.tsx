interface AppLogoIconProps {
    className?: string;
}

export default function AppLogoIcon({ className }: AppLogoIconProps) {
    return (
      <img src="/s3rvnbg.png"
           className={className}
           alt="App Logo" />
    );
}
