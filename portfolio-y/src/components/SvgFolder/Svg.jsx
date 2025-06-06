import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Welcome from '../Welcome/Welcome';
import AboutMe from '../AboutMe/AboutMe';
import './Svg.css';
const SvgFolder = () => {
  return (
    <>
      <div className='h-screen w-full overflow-hidden svg-container '>
        <Parallax pages={2}>
          <ParallaxLayer
            offset={0}
            speed={0.4}
            style={{ backgroundColor: 'var(--welcome-background-color)' }}
          >
            <Welcome />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.4}>
            <svg
              viewBox='0 0 2000 1080'
              xmlns='http://www.w3.org/2000/svg'
              className='svg-wave svg-layer-2'
            >
              <path
                d='M0 819L47.7 804.5C95.3 790 190.7 761 285.8 751.7C381 742.3 476 752.7 571.2 738C666.3 723.3 761.7 683.7 857 677C952.3 670.3 1047.7 696.7 1143 711.7C1238.3 726.7 1333.7 730.3 1428.8 751.2C1524 772 1619 810 1714.2 808.8C1809.3 807.7 1904.7 767.3 1952.3 747.2L2000 727L2000 1081L1952.3 1081C1904.7 1081 1809.3 1081 1714.2 1081C1619 1081 1524 1081 1428.8 1081C1333.7 1081 1238.3 1081 1143 1081C1047.7 1081 952.3 1081 857 1081C761.7 1081 666.3 1081 571.2 1081C476 1081 381 1081 285.8 1081C190.7 1081 95.3 1081 47.7 1081L0 1081Z'
                fill='var(--first-color)'
              />
            </svg>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.3}>
            <svg
              viewBox='0 0 2000 1080'
              xmlns='http://www.w3.org/2000/svg'
              className='svg-wave svg-layer-2'
            >
              <path
                d='M0 819L47.7 804.5C95.3 790 190.7 761 285.8 751.7C381 742.3 476 752.7 571.2 738C666.3 723.3 761.7 683.7 857 677C952.3 670.3 1047.7 696.7 1143 711.7C1238.3 726.7 1333.7 730.3 1428.8 751.2C1524 772 1619 810 1714.2 808.8C1809.3 807.7 1904.7 767.3 1952.3 747.2L2000 727L2000 1081L1952.3 1081C1904.7 1081 1809.3 1081 1714.2 1081C1619 1081 1524 1081 1428.8 1081C1333.7 1081 1238.3 1081 1143 1081C1047.7 1081 952.3 1081 857 1081C761.7 1081 666.3 1081 571.2 1081C476 1081 381 1081 285.8 1081C190.7 1081 95.3 1081 47.7 1081L0 1081Z'
                fill='var(--second-color)'
              />
            </svg>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.35}>
            <svg
              viewBox='0 0 2000 1080'
              xmlns='http://www.w3.org/2000/svg'
              className='svg-wave svg-layer-3'
            >
              <path
                d='M0 862L47.7 846.7C95.3 831.3 190.7 800.7 285.8 784.5C381 768.3 476 766.7 571.2 755.2C666.3 743.7 761.7 722.3 857 735.7C952.3 749 1047.7 797 1143 811.8C1238.3 826.7 1333.7 808.3 1428.8 809.2C1524 810 1619 830 1714.2 843.7C1809.3 857.3 1904.7 864.7 1952.3 868.3L2000 872L2000 1081L1952.3 1081C1904.7 1081 1809.3 1081 1714.2 1081C1619 1081 1524 1081 1428.8 1081C1333.7 1081 1238.3 1081 1143 1081C1047.7 1081 952.3 1081 857 1081C761.7 1081 666.3 1081 571.2 1081C476 1081 381 1081 285.8 1081C190.7 1081 95.3 1081 47.7 1081L0 1081Z'
                fill='var(--second-color)'
              />
            </svg>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.25}>
            <svg
              viewBox='0 0 2000 1080'
              xmlns='http://www.w3.org/2000/svg'
              className='svg-wave svg-layer-3'
            >
              <path
                d='M0 862L47.7 846.7C95.3 831.3 190.7 800.7 285.8 784.5C381 768.3 476 766.7 571.2 755.2C666.3 743.7 761.7 722.3 857 735.7C952.3 749 1047.7 797 1143 811.8C1238.3 826.7 1333.7 808.3 1428.8 809.2C1524 810 1619 830 1714.2 843.7C1809.3 857.3 1904.7 864.7 1952.3 868.3L2000 872L2000 1081L1952.3 1081C1904.7 1081 1809.3 1081 1714.2 1081C1619 1081 1524 1081 1428.8 1081C1333.7 1081 1238.3 1081 1143 1081C1047.7 1081 952.3 1081 857 1081C761.7 1081 666.3 1081 571.2 1081C476 1081 381 1081 285.8 1081C190.7 1081 95.3 1081 47.7 1081L0 1081Z'
                fill='var(--third-color)'
              />
            </svg>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.2}>
            <svg
              viewBox='0 0 2000 1080'
              xmlns='http://www.w3.org/2000/svg'
              className='svg-wave svg-layer-1'
            >
              <path
                d='M0 777L47.7 787.5C95.3 798 190.7 819 285.8 845.3C381 871.7 476 903.3 571.2 910.2C666.3 917 761.7 899 857 873.8C952.3 848.7 1047.7 816.3 1143 809.7C1238.3 803 1333.7 822 1428.8 827C1524 832 1619 823 1714.2 830.2C1809.3 837.3 1904.7 860.7 1952.3 872.3L2000 884L2000 1081L1952.3 1081C1904.7 1081 1809.3 1081 1714.2 1081C1619 1081 1524 1081 1428.8 1081C1333.7 1081 1238.3 1081 1143 1081C1047.7 1081 952.3 1081 857 1081C761.7 1081 666.3 1081 571.2 1081C476 1081 381 1081 285.8 1081C190.7 1081 95.3 1081 47.7 1081L0 1081Z'
                fill='var(--third-color)'
              />
            </svg>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.2}>
            <svg
              viewBox='0 0 2000 1080'
              xmlns='http://www.w3.org/2000/svg'
              className='svg-wave svg-layer-1'
            >
              <path
                d='M0 978L47.7 960.2C95.3 942.3 190.7 906.7 285.8 897.8C381 889 476 907 571.2 904.5C666.3 902 761.7 879 857 874.5C952.3 870 1047.7 884 1143 896.5C1238.3 909 1333.7 920 1428.8 929.5C1524 939 1619 947 1714.2 936.2C1809.3 925.3 1904.7 895.7 1952.3 880.8L2000 866L2000 1081L1952.3 1081C1904.7 1081 1809.3 1081 1714.2 1081C1619 1081 1524 1081 1428.8 1081C1333.7 1081 1238.3 1081 1143 1081C1047.7 1081 952.3 1081 857 1081C761.7 1081 666.3 1081 571.2 1081C476 1081 381 1081 285.8 1081C190.7 1081 95.3 1081 47.7 1081L0 1081Z'
                fill='var(--fourth-color)'
              />
            </svg>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.2}>
            <svg
              viewBox='0 0 2000 1080'
              xmlns='http://www.w3.org/2000/svg'
              className='svg-wave svg-layer-1'
            >
              <path
                d='M0 944L47.7 947.2C95.3 950.3 190.7 956.7 285.8 972.2C381 987.7 476 1012.3 571.2 1008.5C666.3 1004.7 761.7 972.3 857 973C952.3 973.7 1047.7 1007.3 1143 1013.8C1238.3 1020.3 1333.7 999.7 1428.8 999.5C1524 999.3 1619 1019.7 1714.2 1029C1809.3 1038.3 1904.7 1036.7 1952.3 1035.8L2000 1035L2000 1081L1952.3 1081C1904.7 1081 1809.3 1081 1714.2 1081C1619 1081 1524 1081 1428.8 1081C1333.7 1081 1238.3 1081 1143 1081C1047.7 1081 952.3 1081 857 1081C761.7 1081 666.3 1081 571.2 1081C476 1081 381 1081 285.8 1081C190.7 1081 95.3 1081 47.7 1081L0 1081Z'
                fill='var(--fifth-color)'
              />
            </svg>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.1}>
            <svg
              viewBox='0 0 2000 1080'
              xmlns='http://www.w3.org/2000/svg'
              className='svg-wave svg-layer-1'
            >
              <path
                d='M0 944L47.7 947.2C95.3 950.3 190.7 956.7 285.8 972.2C381 987.7 476 1012.3 571.2 1008.5C666.3 1004.7 761.7 972.3 857 973C952.3 973.7 1047.7 1007.3 1143 1013.8C1238.3 1020.3 1333.7 999.7 1428.8 999.5C1524 999.3 1619 1019.7 1714.2 1029C1809.3 1038.3 1904.7 1036.7 1952.3 1035.8L2000 1035L2000 1081L1952.3 1081C1904.7 1081 1809.3 1081 1714.2 1081C1619 1081 1524 1081 1428.8 1081C1333.7 1081 1238.3 1081 1143 1081C1047.7 1081 952.3 1081 857 1081C761.7 1081 666.3 1081 571.2 1081C476 1081 381 1081 285.8 1081C190.7 1081 95.3 1081 47.7 1081L0 1081Z'
                fill='var(--fifth-color)'
              />
            </svg>
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 1, end: 1.8 }} speed={0.3}>
            <AboutMe />
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
};
export default SvgFolder;
