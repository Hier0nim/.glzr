import { Icon } from '../icon/icon';

const iconsByProcessName = {
  librewolf: 'nf-fa-firefox',
  chrome: 'nf-fa-chrome',
  Spotify: 'nf-fa-spotify',
  'wezterm-gui': 'nf-dev-terminal',
  Terminal: 'nf-dev-terminal',
  OUTLOOK: 'nf-md-microsoft_outlook',
  'ms-teams': 'nf-md-microsoft_teams',
  Discord: 'nf-fa-discord',
  rider64: 'nf-md-code_array',
  explorer: 'nf-fa-folder',
  Taskmgr: 'nf-cod-server_process',
};

export interface ApplicationIconProps {
  processName: string | undefined;
}

export function ApplicationIcon(props: ApplicationIconProps) {
  const iconClass = () =>
    iconsByProcessName[props.processName] ?? 'nf-md-application'; // Generic icon for unknown process name

  return <Icon iconClass={iconClass()} />;
}
