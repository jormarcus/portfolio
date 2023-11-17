import Image from 'next/image';

type CompanyType = 'ADP' | 'HiLyte';

interface CompanyLogoProps {
  company: CompanyType;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ company }) => {
  return (
    <Image
      src={
        company === 'ADP'
          ? '/images/adp_logo.svg'
          : '/images/hilyteapp_logo.jpeg'
      }
      alt="adp logo"
      fill
      priority
      className="bg-white rounded-full"
    />
  );
};

export default CompanyLogo;
