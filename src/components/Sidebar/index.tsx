import React, {
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  Fragment,
} from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { CloseButton } from "./styles";

interface IPropsDTO {
  children?: any;
  onOpen?: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const Notification = ({ onOpen = false, onClose, children }: IPropsDTO) => {
  const classes = useStyles();

  const [openNotification, setOpenNotification] = useState<boolean>(onOpen);

  useEffect(() => {
    setOpenNotification(onOpen);
  }, [onOpen]);

  const anchor = "left";

  const list = () => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "left",
      })}
      style={{ position: "relative", height: "100%" }}
      role="presentation"
    >
      <div>
        <div>
          <CloseButton onClick={() => onClose(false)}>X</CloseButton>
        </div>
        {children}
      </div>
    </div>
  );

  return (
    <Fragment key={anchor}>
      <Drawer anchor={anchor} open={openNotification} style={{ width: 100 }}>
        {list()}
      </Drawer>
    </Fragment>
  );
};

export default Notification;
