import { useEffect } from "react";
import { Stack, useTheme } from "@mui/material";

// redux imports
import { useSelector, useDispatch } from "react-redux";

import { getOtherUser } from "../../../utils/getOtherUser";
import {
  ConversationFooter,
  ConversationHeader,
  ConversationMain,
} from "./ConversationElements";
import { GetMessages } from "../../../redux/slices/actions/chatActions";

const Conversation = () => {
  const theme = useTheme();
  const {
    activeConvoFriendship,
    sendMsgLoading,
    isOptimistic,
  } = useSelector((state) => state.chat);
  const { user, onlineFriends } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const activeConversation = {
    _id: 0,
    firstName: "Vaibhav",
    lastName: "Mishra",
    avatar: "",
    activityStatus: "Hey there! I love using TwinkConnect ❤️",
    msg: "Hello",
    time: "9:36",
    unread: 2,
    pinned: false,
    online: true,
  }
  const otherUser = getOtherUser(
    activeConversation?.users,
    user._id,
    onlineFriends
  );

  useEffect(() => {
    dispatch(GetMessages(activeConversation?._id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeConversation?._id]);

  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      <ConversationHeader otherUser={otherUser} />

      <ConversationMain />

      {(
        <ConversationFooter
          convo_id={activeConversation._id}
          sendMsgLoading={sendMsgLoading}
          // --------- Optimistic Approach ---------
          isOptimistic={isOptimistic}
          currentUser={user}
          otherUser={otherUser}
          activeConversation={activeConversation}
          // ---------------------------------------
        />
      )}
    </Stack>
  );
};
export default Conversation;
