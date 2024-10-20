import './table.css';
import { PhoneDetail } from '@/app/models/product-detail.model';

interface cardProps {
  phoneDetails: PhoneDetail;
}

export default async function Table({ phoneDetails }: cardProps) {
  const { brand, name, description } = phoneDetails;
  const {
    screen,
    resolution,
    processor,
    mainCamera,
    selfieCamera,
    battery,
    os,
    screenRefreshRate
  } = phoneDetails?.specs;
  return (
    <>
      <h2>SPECIFICATIONS</h2>
      <table className="">
        <tbody className="">
          <tr className="group">
            <td className="">BRAND</td>
            <td className="">{brand}</td>
          </tr>
          <tr className="group">
            <td className="">NAME</td>
            <td className="">{name}</td>
          </tr>
          <tr className="group">
            <td className="">DESCRIPTION</td>
            <td className="">{description}</td>
          </tr>
          <tr className="group">
            <td className="">SCREEN</td>
            <td className="">{screen}</td>
          </tr>
          <tr className="group">
            <td className="">RESOLUTION</td>
            <td className="">{resolution}</td>
          </tr>
          <tr className="group">
            <td className="">PROCESSOR</td>
            <td className="">{processor}</td>
          </tr>
          <tr className="group">
            <td className="">MAIN CAMERA</td>
            <td className="">{mainCamera}</td>
          </tr>
          <tr className="group">
            <td className="">SELFIE CAMERA</td>
            <td className="">{selfieCamera}</td>
          </tr>
          <tr className="group">
            <td className="">BATTERY</td>
            <td className="">{battery}</td>
          </tr>
          <tr className="group">
            <td className="">OS</td>
            <td className="">{os}</td>
          </tr>
          <tr className="group">
            <td className="">SCREEN REFRESH RATE</td>
            <td className="">{screenRefreshRate}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
