import { StudioSvg } from "../atoms";

export const steps = [
  {
    title: "Welcome, Tony!",
    subtitle: "What type of work do you typically do?",
    options: [
      {
        label: "Design",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 15L16 10L5 21" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      },
      {
        label: "Marketing",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 20V10" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 20V4" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 20V14" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      },
      {
        label: "Development",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V5C22 3.89543 21.1046 3 20 3Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 21H16" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 17V21" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      },
      {
        label: "Photography",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.3101 8L20.0501 17.94" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.68994 8H21.1699" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.37988 12.0001L13.1199 2.06006" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.6902 16.0001L3.9502 6.06006" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.3101 16H2.83008" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.6199 12L10.8799 21.94" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      },
      {
        label: "Consulting",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      },
      {
        label: "Content",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      },
      {
        label: "Videography",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 7L16 12L23 17V7Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      },
      {
        label: "Other",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 3C17.2044 3 16.4413 3.31607 15.8787 3.87868C15.3161 4.44129 15 5.20435 15 6V18C15 18.7956 15.3161 19.5587 15.8787 20.1213C16.4413 20.6839 17.2044 21 18 21C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 17.2044 20.6839 16.4413 20.1213 15.8787C19.5587 15.3161 18.7956 15 18 15H6C5.20435 15 4.44129 15.3161 3.87868 15.8787C3.31607 16.4413 3 17.2044 3 18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21C6.79565 21 7.55871 20.6839 8.12132 20.1213C8.68393 19.5587 9 18.7956 9 18V6C9 5.20435 8.68393 4.44129 8.12132 3.87868C7.55871 3.31607 6.79565 3 6 3C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6C3 6.79565 3.31607 7.55871 3.87868 8.12132C4.44129 8.68393 5.20435 9 6 9H18C18.7956 9 19.5587 8.68393 20.1213 8.12132C20.6839 7.55871 21 6.79565 21 6C21 5.20435 20.6839 4.44129 20.1213 3.87868C19.5587 3.31607 18.7956 3 18 3Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>


      }
    ],
    stepOne: true,
    name: 'work'
  },
  {
    title: "Which best describes you?",
    subtitle: "Nice, Flance works very well for designers",
    options: [
      {
        label: "Full Time Freelancer",
        icon: <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21.5V19.5C20 18.4391 19.5786 17.4217 18.8284 16.6716C18.0783 15.9214 17.0609 15.5 16 15.5H8C6.93913 15.5 5.92172 15.9214 5.17157 16.6716C4.42143 17.4217 4 18.4391 4 19.5V21.5" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 11.5C14.2091 11.5 16 9.70914 16 7.5C16 5.29086 14.2091 3.5 12 3.5C9.79086 3.5 8 5.29086 8 7.5C8 9.70914 9.79086 11.5 12 11.5Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      },
      {
        label: "Part Time Freelancer",
        icon: <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.9999 13.29C20.8426 14.9922 20.2038 16.6144 19.1581 17.9668C18.1125 19.3192 16.7034 20.3458 15.0956 20.9265C13.4878 21.5073 11.7479 21.6181 10.0794 21.2461C8.41092 20.8741 6.8829 20.0345 5.67413 18.8258C4.46536 17.617 3.62584 16.089 3.25381 14.4205C2.88178 12.752 2.99262 11.0121 3.57336 9.4043C4.15411 7.79651 5.18073 6.38737 6.53311 5.34175C7.8855 4.29614 9.5077 3.65731 11.2099 3.5C10.2133 4.84827 9.73375 6.50945 9.85843 8.18141C9.98312 9.85338 10.7038 11.4251 11.8893 12.6106C13.0748 13.7961 14.6465 14.5168 16.3185 14.6415C17.9905 14.7662 19.6516 14.2866 20.9999 13.29V13.29Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      },
      {
        label: "Studio or Agency",
        icon: <StudioSvg />
      },
      {
        label: "Not currently working",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.93018 4.93005L19.0702 19.0701" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      }
    ],
    stepOne: false,
    name: 'description'
  },
  {
    title: "What are you most interested in?",
    subtitle: "Sounds good, Flance can help you with any of your projects",
    options: [
      {
        label: "Proposals",
        icon: <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21.5V19.5C20 18.4391 19.5786 17.4217 18.8284 16.6716C18.0783 15.9214 17.0609 15.5 16 15.5H8C6.93913 15.5 5.92172 15.9214 5.17157 16.6716C4.42143 17.4217 4 18.4391 4 19.5V21.5" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 11.5C14.2091 11.5 16 9.70914 16 7.5C16 5.29086 14.2091 3.5 12 3.5C9.79086 3.5 8 5.29086 8 7.5C8 9.70914 9.79086 11.5 12 11.5Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      },
      {
        label: "Contracts",
        icon: <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.7161 16.7234H8.49609" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.7161 12.5369H8.49609" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.2511 8.36011H8.49609" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path fillRule="evenodd" clipRule="evenodd" d="M15.9085 3.24976C15.9085 3.24976 8.23149 3.25376 8.21949 3.25376C5.45949 3.27076 3.75049 5.08676 3.75049 7.85676V17.0528C3.75049 19.8368 5.47249 21.6598 8.25649 21.6598C8.25649 21.6598 15.9325 21.6568 15.9455 21.6568C18.7055 21.6398 20.4155 19.8228 20.4155 17.0528V7.85676C20.4155 5.07276 18.6925 3.24976 15.9085 3.24976Z" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      },
      {
        label: "Invoicing & Payments",
        icon: <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 4.5H3C1.89543 4.5 1 5.39543 1 6.5V18.5C1 19.6046 1.89543 20.5 3 20.5H21C22.1046 20.5 23 19.6046 23 18.5V6.5C23 5.39543 22.1046 4.5 21 4.5Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1 10.5H23" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      },
      {
        label: "Accounting and taxes",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.3679 15.1115C18.859 16.3151 18.0629 17.3757 17.0494 18.2006C16.0359 19.0254 14.8357 19.5895 13.5538 19.8434C12.272 20.0973 10.9474 20.0333 9.69599 19.657C8.44456 19.2807 7.30435 18.6036 6.37506 17.6849C5.44577 16.7661 4.75569 15.6337 4.36514 14.3867C3.9746 13.1396 3.89548 11.8159 4.13471 10.5312C4.37394 9.2465 4.92424 8.03997 5.73748 7.01709C6.55073 5.99421 7.60216 5.18611 8.79986 4.66345" stroke="#828282" strokeWidth="1.60001" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 11.9996C20 10.949 19.7931 9.90868 19.3911 8.93807C18.989 7.96746 18.3998 7.08554 17.6569 6.34267C16.914 5.5998 16.0321 5.01052 15.0615 4.60848C14.0909 4.20644 13.0506 3.99951 12 3.99951V11.9996H20Z" stroke="#828282" strokeWidth="1.60001" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      },
    ],
    stepOne: false,
    name: 'interest'
  },
  {
    title: "Are you starting a new project in the next week?",
    subtitle: "Good to know 👍",
    options: [
      {
        label: "Yes",
        icon: <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.5801V12.5001C21.9988 14.6565 21.3005 16.7548 20.0093 18.4819C18.7182 20.2091 16.9033 21.4726 14.8354 22.084C12.7674 22.6954 10.5573 22.622 8.53447 21.8747C6.51168 21.1274 4.78465 19.7462 3.61096 17.9372C2.43727 16.1281 1.87979 13.9882 2.02168 11.8364C2.16356 9.68467 2.99721 7.63643 4.39828 5.99718C5.79935 4.35793 7.69279 3.21549 9.79619 2.74025C11.8996 2.26502 14.1003 2.48245 16.07 3.36011" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 4.5L12 14.51L9 11.51" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      },
      {
        label: "No",
        icon: <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 9.5L9 15.5" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 9.5L15 15.5" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      },
      {
        label: "Maybe",
        icon: <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 12.5H16" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      }
    ],
    stepOne: false,
    name: 'project'
  },
  {
    title: "Whats the #1 way you want flance to help your business?",
    subtitle: "Last Question",
    options: [
      {
        label: "Manage my business in one place",
        icon: <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.5801V12.5001C21.9988 14.6565 21.3005 16.7548 20.0093 18.4819C18.7182 20.2091 16.9033 21.4726 14.8354 22.084C12.7674 22.6954 10.5573 22.622 8.53447 21.8747C6.51168 21.1274 4.78465 19.7462 3.61096 17.9372C2.43727 16.1281 1.87979 13.9882 2.02168 11.8364C2.16356 9.68467 2.99721 7.63643 4.39828 5.99718C5.79935 4.35793 7.69279 3.21549 9.79619 2.74025C11.8996 2.26502 14.1003 2.48245 16.07 3.36011" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 4.5L12 14.51L9 11.51" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      },
      {
        label: "Look more professional",
        icon: <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.5801V12.5001C21.9988 14.6565 21.3005 16.7548 20.0093 18.4819C18.7182 20.2091 16.9033 21.4726 14.8354 22.084C12.7674 22.6954 10.5573 22.622 8.53447 21.8747C6.51168 21.1274 4.78465 19.7462 3.61096 17.9372C2.43727 16.1281 1.87979 13.9882 2.02168 11.8364C2.16356 9.68467 2.99721 7.63643 4.39828 5.99718C5.79935 4.35793 7.69279 3.21549 9.79619 2.74025C11.8996 2.26502 14.1003 2.48245 16.07 3.36011" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 4.5L12 14.51L9 11.51" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      },
      {
        label: "Get paid faster",
        icon: <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.5801V12.5001C21.9988 14.6565 21.3005 16.7548 20.0093 18.4819C18.7182 20.2091 16.9033 21.4726 14.8354 22.084C12.7674 22.6954 10.5573 22.622 8.53447 21.8747C6.51168 21.1274 4.78465 19.7462 3.61096 17.9372C2.43727 16.1281 1.87979 13.9882 2.02168 11.8364C2.16356 9.68467 2.99721 7.63643 4.39828 5.99718C5.79935 4.35793 7.69279 3.21549 9.79619 2.74025C11.8996 2.26502 14.1003 2.48245 16.07 3.36011" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 4.5L12 14.51L9 11.51" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      },
      {
        label: "Win more business",
        icon: <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.5801V12.5001C21.9988 14.6565 21.3005 16.7548 20.0093 18.4819C18.7182 20.2091 16.9033 21.4726 14.8354 22.084C12.7674 22.6954 10.5573 22.622 8.53447 21.8747C6.51168 21.1274 4.78465 19.7462 3.61096 17.9372C2.43727 16.1281 1.87979 13.9882 2.02168 11.8364C2.16356 9.68467 2.99721 7.63643 4.39828 5.99718C5.79935 4.35793 7.69279 3.21549 9.79619 2.74025C11.8996 2.26502 14.1003 2.48245 16.07 3.36011" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 4.5L12 14.51L9 11.51" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      },
      {
        label: "Manage my finances",
        icon: <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.5801V12.5001C21.9988 14.6565 21.3005 16.7548 20.0093 18.4819C18.7182 20.2091 16.9033 21.4726 14.8354 22.084C12.7674 22.6954 10.5573 22.622 8.53447 21.8747C6.51168 21.1274 4.78465 19.7462 3.61096 17.9372C2.43727 16.1281 1.87979 13.9882 2.02168 11.8364C2.16356 9.68467 2.99721 7.63643 4.39828 5.99718C5.79935 4.35793 7.69279 3.21549 9.79619 2.74025C11.8996 2.26502 14.1003 2.48245 16.07 3.36011" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 4.5L12 14.51L9 11.51" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      }
    ],
    stepOne: false,
    name: 'lastQuestion'
  }
]