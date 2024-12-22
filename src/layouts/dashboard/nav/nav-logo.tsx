import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import Logo from "@/components/logo";
import { useSettings } from "@/store/settingStore";
import { cn } from "@/utils";

import { HEADER_HEIGHT } from "../config";

import { themeVars } from "@/theme/theme.css";
import { ThemeLayout } from "#/enum";

type Props = {
	collapsed: boolean;
	onToggle: () => void;
};
export default function NavLogo({ collapsed, onToggle }: Props) {
	const { themeLayout } = useSettings();

	return (
		<div style={{ height: `${HEADER_HEIGHT}px` }} className="relative flex items-center justify-center py-4">
			<div className="flex items-center">
				<Logo />
				{themeLayout !== ThemeLayout.Mini && <span className="ml-2 text-xl font-bold text-primary">Slash Admin</span>}
			</div>
			<div
				onClick={onToggle}
				onKeyDown={onToggle}
				className={cn(
					"absolute right-0 top-7 z-50 hidden h-6 w-6 translate-x-1/2 cursor-pointer select-none items-center justify-center rounded-full text-center md:flex bg-bg-paper",
				)}
				style={{
					fontSize: 12,
					border: `1px dashed rgba(${themeVars.colors.palette.gray["500Channel"]}, 0.2)`,
				}}
			>
				{collapsed ? (
					<RightOutlined className="text-xs text-text-disabled" />
				) : (
					<LeftOutlined className="text-xs text-text-disabled" />
				)}
			</div>
		</div>
	);
}